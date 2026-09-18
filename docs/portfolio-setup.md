# Portfolio setup

The pastel layout and Spotify section remain in place. The archive and project pages share one typed data source, and project links can be opened or shared directly.

## Contact form: activation required

No enquiries are sent until the following configuration is complete. The default preview clearly shows that online enquiries are unavailable.

1. Set `VITE_CONTACT_EMAIL` to the client's approved public contact address in Netlify's build environment. Locally, use an ignored `.env.local` file based on `.env.example`.
2. Enable form detection in Netlify, then deploy. Verify that the Forms dashboard lists **project-enquiry**. The static `public/__forms.html` file registers the fields for this SSR application.
3. Add an email notification for that form to the approved recipient. Setting `VITE_CONTACT_EMAIL` only changes the displayed address; it does not configure Netlify notifications.
4. Set `VITE_CONTACT_FORM_ENABLED=true` and rebuild/deploy. Keep it false until the recipient and form detection are configured.
5. Submit an approved test enquiry on the deployed site. Check the Forms dashboard and actual inbox, including spam. Live delivery has not been tested by the automated checks.

The form includes a honeypot, input limits, native/browser validation, timeout handling, and duplicate-click protection. It retains entered values on failure. Netlify applies its own spam handling. Provider acceptance is reported as receipt, not a guarantee that an inbox received the notification.

No API keys are needed for this integration. Never add private credentials to `VITE_` variables; those are public client settings.

Netlify reference: [JavaScript and SSR forms](https://docs.netlify.com/manage/forms/setup/#javascript-forms).

## Film credits and listening links

Existing `role` values remain supported. In Sanity, each project can now include:

- Specific contributions (song mixing, score mixing, mastering, and other credited roles).
- Composer, director, and a short approved description.
- Official listening, video, and IMDb URLs. Missing links are omitted from the interface.
- A homepage feature flag and ordering number. Up to six featured projects are displayed.

These fields are optional. Do not infer credits or add unapproved media. No existing CMS documents were changed by this work.

The archive displays only published CMS entries when available. It no longer silently appends local samples to live results. During an outage, a validated snapshot of the last successful archive can be used for up to seven days, with a visible notice. Without a snapshot, the existing sample credits are clearly labelled. Storage failures do not prevent browsing.

For direct browser access, allow the actual site origin in Sanity's API CORS settings. Add the local preview origin when developing; do not use a wildcard. The previously observed local CORS failure remains an account-level configuration item.

Filters and the number of visible rows are kept in the URL. Project pages provide a clean link for sharing and a return link preserving the archive filters and position. A project-specific enquiry carries a reference to that credit.

## Checks

Use Node 22.6 or newer for the TypeScript test runner. Run `npm test`, `npx tsc --noEmit`, and `npm run build`. The tests cover filter validation, cached archive integrity, safe media URLs, enquiry failure handling, and the Netlify registration fields.

The 600-credit performance fixture is synthetic test data and is never displayed on the site. The actual full archive has not been supplied. Recheck transfer size and interaction performance when it is populated; only 24 rows are initially rendered.

Netlify builds should use the existing `NITRO_PRESET=netlify` configuration. Local default builds can target a different Nitro preset, so verify the Netlify output as part of deployment.
