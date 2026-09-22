# Client poster pack review

Reviewed 22 September 2026. Source: the client-supplied `MOVIE POSTERS.zip`.

## What is in the folder

There are 59 image files totalling 27.31 MiB: 47 JPG, seven JPEG, three WebP, one AVIF and one TIFF. Mac metadata files were excluded. The original ZIP was left untouched.

The folder contains film posters and at least six apparent music-release covers. It is a supplied artwork collection, not a verified list of 59 distinct film credits or proof of the complete 600+ career total.

[The inventory CSV](client-poster-inventory.csv) lists every original filename, the identified or tentative title, a category for review, the existing project match and unresolved details. Empty year/language/contribution columns are intentional; they are fields to complete with evidence or the client's records.

## Changes made locally

- Matched 12 posters to the existing website entries and added one researched project, Premalu. All 13 matched originals are stored under `public/images/client-posters/`; their contents are unchanged.
- Connected the matched artwork to the small-thumbnail archive and project pages. Following the client's animation preference, the homepage now presents all 59 artworks in a curved moving wall with six alternating rows and a gentle zoom. Each artwork belongs to one row and is rendered once; individual tiles wrap outside the visible area without cloned rows. Spotify remains in its existing section.
- Added click-to-enlarge previews with keyboard dismissal and focus restoration. The 13 matched gallery items link to their existing project pages; the other images open artwork previews without inventing film credits.
- Corrected the selected Ae Dil Hai Mushkil role to recording engineer, matching its existing archive entry and the Bulleya credits.
- Scoped Nayattu's added listening example to Appalaale and linked the official 123Musix video.
- Added Premalu with song mixing/mastering credits and an official Bhavana Studios jukebox link. The local archive now contains 25 entries, with 24 shown initially and the remaining entry available through Show more credits.

The other 46 poster assets are visible in the homepage artwork gallery but still need review before becoming detailed filmography credits. The source images extracted for inspection and three contact sheets are in the ignored `.design-review.local` directory. The 59-artwork gallery and 25-project credit archive serve different purposes.

## Title and artwork issues to resolve

- `KALA.jpeg` shows Rajinikanth's Kaala, not the Malayalam film Kala.
- `SM.jpg` identifies Sulaikha Manzil; `TTT.jpg` identifies Thalaivar Thambi Thalaimaiyil; `BHEEMANTE.jpg` identifies Bheemante Vazhi; `777.jpg` identifies 777 Charlie.
- `AGNAYATHAVASI.jpg` is Kannada artwork; do not associate it with the Telugu film Agnyaathavaasi by filename alone.
- `Soodhu-Kavvum.jpg` appears to represent the sequel. Confirm the exact production.
- `IMG-20250531-WA00251.jpg` still needs an exact title. Do not derive identity or release date from the filename.
- `SALAGA.jpg` carries a March 2020 promotional date. Printed promotional dates are not reliable final release years.
- `POR copy.tiff` has now been decoded, visually identified as Por and exported to WebP. Its preview works in Chrome.
- Some artwork is square or landscape; avoid forcing those assets into large portrait crops. Several images also contain streaming-service logos, teaser notices or view counts. Cleaner title artwork would improve the finished portfolio.

## Recommended use

The homepage defaults to the animated wall the client prefers. Pause/Play and View all 59 artworks controls provide a still overview. Animation pauses when the wall is off screen, hovered with a pointer, keyboard-focused or displaying a preview. Reduced-motion preferences automatically show a static grid. Keep detailed credits in Filmography with search, small thumbnails and pagination. Add Film/Music filtering once the standalone singles, albums and live sessions have been classified reliably.

For each new entry, establish its official title, version/language, release year and Sujith's exact contribution. Song recording, song mixing/mastering, score mixing and a film's final sound mix are different credits. Link an official track or video where available.

The homepage uses 59 WebP thumbnails and 59 larger previews under `public/images/poster-gallery/`, referenced by `src/data/poster-gallery.ts`. The thumbnails total 1,409,572 bytes versus 28,637,444 bytes for the original ZIP images; the larger previews total 6,647,990 bytes and load only when opened. Exports preserve image proportions and artwork. Original files and the ZIP are unchanged. The 13 older archive image copies remain at their existing paths. No image has been generatively altered.

## Why the earlier screenshot showed one film

The earlier implementation replaced the local selection with the successful CMS response, so a CMS containing one project produced one visible row. The workspace supplied on 22 September has since been changed to use a local 24-entry list and bypass the CMS. This poster pass preserves that current data-source choice and extends it to 25 entries. It does not restore CMS synchronization or deploy the site.

When CMS synchronization is restored, migrate the approved entries into it or explicitly merge a maintained local catalogue with CMS overrides. Replacing the complete list with a partial CMS response would recreate the original issue.

See [credit research](sujith-credit-research.md) for the evidence gathered so far.

## Validation

TypeScript and lint checks for the changed data modules passed. Local Chrome checks confirmed 24 initially visible archive rows, 25 after Show more, 13 connected client-poster images, successful decoding of all archive images, the official Premalu video link, and no archive overflow at 390px or 768px. No uncaught browser errors were observed. The new content has not been deployed.

The homepage update also passed TypeScript, scoped lint and the production build. Chrome checks verified 59 unique artwork IDs, six alternating animated rows, visible movement, Pause/Play, the full-grid overview, enlarged previews, Escape dismissal and restored keyboard focus, automatic reduced-motion layout, and no horizontal overflow at 320, 390, 768 or 1440 pixels. Earlier gallery checks also confirmed successful decoding of all 59 thumbnails including the TIFF-derived asset and the matched project links.
