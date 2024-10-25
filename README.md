# Spark Stats - version 0.6.2

## Description

One of those websites where you can see what tracks and artists you've listened to most over a certain predefined time range, mainly inspired by [volt.fm](https://volt.fm) but way more limited

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Change Log](#change-log)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org)
- [pnpm](https://pnpm.io/installation) or another Javascript package manager
- [Spotify Account](https://www.spotify.com)
- [Spotify Developer Account](https://developer.spotify.com)

### Installation

1. Clone the repository

```bash
git clone https://github.com/m1841/spark-stats.git
cd spark-stats
```

2. Install dependencies

```bash
pnpm i
```

3. Create a Spotify app in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications) and add `http://localhost:3000/api/auth/callback/spotify` as a redirect URI.

4. Create a `.env.local` file in the root directory and add the following:

```bash
SPOTIFY_CLIENT_ID=[CLIENT ID FROM THE SPOTIFY DASHBOARD]
SPOTIFY_CLIENT_SECRET=[CLIENT SECRET FROM THE SPOTIFY DASHBOARD]
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=[ANY RANDOM STRING]
```

5. Run the app

- Development
  ```bash
  pnpm dev
  ```
- Production
  ```bash
  pnpm build
  pnpm start
  ```

## Change Log

### v0.6.2

Type: Patch

Released: 2024-10-25

- Top tracks and artists are now fetched concurrently
- Removed all `ScrollArea`s in favor of letting scrolling behaviour be full-page as expected
- Changed `All Time` range selection text to `1 Year` to reflect Spotify API changes
- Re-formatted all code to match my current code style
- Adjusted README to use `pnpm` over `npm` since it was used on this project
- Updated license from MIT to Unlicense

### v0.6.1

Type: Minor

Released: 2023-09-24

- Changed the time range selection mechanism from navigating between different pages to switching visibility using CSS only
- Refactored the `Track` and `Artist` components to remove the need for `IndexedTrack` and `IndexedArtist`
- Did some minor styling tweaks

### v0.6.0

Type: Minor

Released: 2023-09-02

- Added a side menu that allows the user to navigate between the different pages of the app
- Added a custom `Image` component that doesn't use the `next/image` component and allows for more customization without having to pay to use over 1000 images per month (the app renders up to 646 images per user)
- Added some error handling, more to come
- Did some minor styling tweaks

### v0.5.0

Type: Minor

Released: 2023-08-31

- Added loading UI for all the components that fetch data
- Separated the `Top Tracks` and `Top Artists` sections page into `/top-tracks/[timeRange]` and `/top-artists/[timeRange]` pages
- Did some minor styling tweaks

### v0.4.2

Type: Patch

Released: 2023-08-31

- Replaced the `Open in new page` button on the track cards with a dropdown menu that allows the user to open the track, artist or album in a new page
- Did some minor styling tweaks

### v0.4.1

Type: Patch

Released: 2023-08-28

- Fixed some styling issues on the `/stats/[timeRange]` page

### v0.4.0

Type: Minor

Released: 2023-08-28

- Added a `/stats/[timeRange]` page that displays the user's top tracks and artists for the selected time range (`short_term`, `medium_term` or `long_term`)

### v0.3.1

Type: Patch

Released: 2023-08-23

- Fixed the styling of the `Recently Played` section on the home page
- Added a new `Your Profile` section to the home page that displays the user's profile picture, name, a link to their Spotify profile and a signout button
- Added `Table of Contents`, `Getting Started` and `Change Log` sections to the README

### v0.3.0

Type: Minor

Released: 2023-08-20

- Added `Currently Playing` and `Recently Played` sections to the home page

### v0.2.1

Type: Patch

Released: 2023-08-18

- Fixed a type error in the auth route that prevented the app from building on Vercel

### v0.2.0

Type: Minor

Released: 2023-08-18

- Set up NextAuth.js
- Added login functionality to the signin page
- Added a temporary home page with the user's name and profile picture and a signout button

### v0.1.0

Type: Minor

Released: 2023-08-17

- Added a non-functional, purely aesthetic signin page
- Implemented day/night theme switching
