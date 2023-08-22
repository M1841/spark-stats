# Spark Stats - version 0.3.1

## Description

Spark Stats is project that's been on my mind for a while. I've kept postponing it because I wanted it to be perfect and I wanted to learn everything I'd need to know before starting it, but I've ultimately decided that learning as I go is the best way to go about it. The intent is to build a Spotify companion app that will allow you to see your stats and compare them with your friends, offer library management features such as playlist shuffling, duplicate removal and more.

## Table of Contents

- [Getting Started](#getting-started)   
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Change Log](#change-log)


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Spotify Account](https://www.spotify.com/ro-ro/signup)
- [Spotify Developer Account](https://accounts.spotify.com/en/login?continue=https%3A%2F%2Faccounts.spotify.com%2Foauth2%2Fv2%2Fauth%3Fresponse_type%3Dnone%26client_id%3Dcfe923b2d660439caf2b557b21f31221%26scope%3Demail%2Bopenid%2Bprofile%2Buser-self-provisioning%26redirect_uri%3Dhttps%253A%252F%252Fdeveloper.spotify.com%252Floggedin%26state%3D49db3676-37ae-4f42-b845-ba21844edff7)

### Installation

1. Clone the repo

``` bash
git clone https://github.com/m1841/spark-stats.git
cd spark-stats
```

2. Install dependencies

``` bash
npm install
```

3. Create a Spotify app in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications) and add `http://localhost:3000/api/auth/callback/spotify` as a redirect URI.

4. Create a `.env.local` file in the root directory and add the following:

``` bash
SPOTIFY_CLIENT_ID=[CLIENT ID FROM THE SPOTIFY DASHBOARD]
SPOTIFY_CLIENT_SECRET=[CLIENT SECRET FROM THE SPOTIFY DASHBOARD]
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=[ANY RANDOM STRING]
```

5. Run the app

- Development
    ``` bash
    npm run dev
    ```
    
- Production
    ``` bash
    npm run build
    npm run start
    ```

## Change Log

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