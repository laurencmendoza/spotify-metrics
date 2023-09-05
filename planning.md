# Spotify Metrics - Project 3 Planning

Spotify Metrics allows you to view metrics from your Spotify account, including your top songs, top artists, and saved playlists. While viewing your saved playlists, you can see an overview of the playlist's musical positiveness (valence), energy, and danceability, as well as each track's main audio features, such as the loudness, tempo, time signature, and key signature.

## Trello Board

Here is the [link](https://trello.com/b/tUqarF97/spotify-metrics-planning) to my Trello board! 

## Wireframes

### Home Page
![Home Page Wireframe](https://github.com/laurencmendoza/spotify-metrics/assets/137251999/f92f98e2-d9c2-4ec6-94b6-e82c6ceb01ed)

### Playlists Page
![Playlist Page Wireframe](https://github.com/laurencmendoza/spotify-metrics/assets/137251999/138f50dc-8f59-4fad-962b-ec6c3c8d23bb)

### Playlist Details Page (Tracks)
![Playlist Details Page Wireframe](https://github.com/laurencmendoza/spotify-metrics/assets/137251999/d4eb888c-c545-41f5-a200-b2842ad83364)

### Metrics
![Metrics Wireframe](https://github.com/laurencmendoza/spotify-metrics/assets/137251999/9b2c8465-e686-48f7-a566-ea0bc18cc94f)


## Component Tree

## JSON samples

The user can view their user information. This is the request that will be made to Spotify's API: 

```
GET https://api.spotify.com/v1/me
```

Example JSON data: 

```
{
    "display_name": "Lauren Camille Mendoza",
    "external_urls": {
        "spotify": "https://open.spotify.com/user/12157798584"
    },
    "href": "https://api.spotify.com/v1/users/12157798584",
    "id": "12157798584",
    "images": [
        {
            "url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-1/371523462_10218934505193629_7100179409208668762_n.jpg?stp=cp1_dst-jpg_p50x50&_nc_cat=102&ccb=1-7&_nc_sid=5fac6f&_nc_ohc=IiMTlDlC4-0AX8dFCZf&_nc_ht=scontent-lga3-1.xx&edm=AP4hL3IEAAAA&oh=00_AfAJYoESaWU8NDdTfcCDmorWD-XCmyQxGWtW0MkaKV0gzQ&oe=64FAAFBD",
            "height": 64,
            "width": 64
        },
        {
            "url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-1/371523462_10218934505193629_7100179409208668762_n.jpg?stp=cp1_dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=ae1064&_nc_ohc=IiMTlDlC4-0AX8dFCZf&_nc_ht=scontent-lga3-1.xx&edm=AP4hL3IEAAAA&oh=00_AfBTd5oJ11M0CGMkjK36gUa0HBhzyS5JDxR-AUMViAkzvA&oe=64FAAFBD",
            "height": 300,
            "width": 300
        }
    ],
    "type": "user",
    "uri": "spotify:user:12157798584",
    "followers": {
        "href": null,
        "total": 33
    },
    "country": "US",
    "product": "premium",
    "explicit_content": {
        "filter_enabled": false,
        "filter_locked": false
    }
}
```

The user can view their top artists from the last 4 weeks. This is the request that will be made to Spotify's API: 
```
GET https://api.spotify.com/v1/me/top/artists?time_range=short_term
```

Example JSON data: 
```
{
  "items": [
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
      },
      "followers": {
        "href": null,
        "total": 0
      },
      "genres": [
        "pop"
      ],
      "href": "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
      "id": "06HL4z0CvFAxyc27GXpf02",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb6a224073987b930f99adc706",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051746a224073987b930f99adc706",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1786a224073987b930f99adc706",
          "width": 160
        }
      ],
      "name": "Taylor Swift",
      "popularity": 100,
      "type": "artist",
      "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
    }
  ],
  "total": 6,
  "limit": 1,
  "offset": 0,
  "href": "https://api.spotify.com/v1/me/top/artists?limit=1&offset=0&time_range=short_term",
  "next": "https://api.spotify.com/v1/me/top/artists?limit=1&offset=1&time_range=short_term",
  "previous": null
}
```
The user can view their top tracks from the last 4 weeks. This is the request that will be made to Spotify's API:
```
GET https://api.spotify.com/v1/me/top/tracks?time_range=short_term
```

Example JSON data:
```
{
  "items": [
    {
      "album": {
        "album_type": "SINGLE",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1McMsnEElThX1knmY4oliG"
            },
            "href": "https://api.spotify.com/v1/artists/1McMsnEElThX1knmY4oliG",
            "id": "1McMsnEElThX1knmY4oliG",
            "name": "Olivia Rodrigo",
            "type": "artist",
            "uri": "spotify:artist:1McMsnEElThX1knmY4oliG"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/3SHq2tBWWsAG6NEOMKZSj0"
        },
        "href": "https://api.spotify.com/v1/albums/3SHq2tBWWsAG6NEOMKZSj0",
        "id": "3SHq2tBWWsAG6NEOMKZSj0",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2738bfab8d577ad17a7b74d9f5f",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e028bfab8d577ad17a7b74d9f5f",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048518bfab8d577ad17a7b74d9f5f",
            "width": 64
          }
        ],
        "name": "bad idea right?",
        "release_date": "2023-08-11",
        "release_date_precision": "day",
        "total_tracks": 1,
        "type": "album",
        "uri": "spotify:album:3SHq2tBWWsAG6NEOMKZSj0"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1McMsnEElThX1knmY4oliG"
          },
          "href": "https://api.spotify.com/v1/artists/1McMsnEElThX1knmY4oliG",
          "id": "1McMsnEElThX1knmY4oliG",
          "name": "Olivia Rodrigo",
          "type": "artist",
          "uri": "spotify:artist:1McMsnEElThX1knmY4oliG"
        }
      ],
      "available_markets": [
        "AD",
        "AE",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BH",
        "BO",
        "BR",
        "CA",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IS",
        "IT",
        "JO",
        "JP",
        "KW",
        "LB",
        "LI",
        "LT",
        "LU",
        "LV",
        "MA",
        "MC",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PH",
        "PL",
        "PS",
        "PT",
        "PY",
        "QA",
        "RO",
        "SA",
        "SE",
        "SG",
        "SK",
        "SV",
        "TH",
        "TN",
        "TR",
        "TW",
        "US",
        "UY",
        "VN",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 184783,
      "explicit": true,
      "external_ids": {
        "isrc": "USUG12304094"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/2i8f4VnnBjy0yDqH2C452a"
      },
      "href": "https://api.spotify.com/v1/tracks/2i8f4VnnBjy0yDqH2C452a",
      "id": "2i8f4VnnBjy0yDqH2C452a",
      "is_local": false,
      "name": "bad idea right?",
      "popularity": 92,
      "preview_url": "https://p.scdn.co/mp3-preview/2bf179769229722bbe2e8e91093a40de2d1fa77a?cid=58e284505b074d21ac0cb51d686ce406",
      "track_number": 1,
      "type": "track",
      "uri": "spotify:track:2i8f4VnnBjy0yDqH2C452a"
    }
  ],
  "total": 50,
  "limit": 1,
  "offset": 0,
  "href": "https://api.spotify.com/v1/me/top/tracks?limit=1&offset=0&time_range=short_term",
  "next": "https://api.spotify.com/v1/me/top/tracks?limit=1&offset=1&time_range=short_term",
  "previous": null
}
```

The user can view their playlists. This is the request that will be made to Spotify's API: 
```
GET https://api.spotify.com/v1/me/playlists
```

Example JSON data: 

```
{
    "href": "https://api.spotify.com/v1/users/12157798584/playlists?offset=0&limit=1",
    "items": [
        {
            "collaborative": false,
            "description": "eras setlist || 🦋🫶💜🧣🌃🐍💘🪩🌲🕰️ || spotify reply to my email before you take this down smh || no surprise songs",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/6qSYIKJihVKpWr2HDeHjxS"
            },
            "href": "https://api.spotify.com/v1/playlists/6qSYIKJihVKpWr2HDeHjxS",
            "id": "6qSYIKJihVKpWr2HDeHjxS",
            "images": [
                {
                    "height": null,
                    "url": "https://i.scdn.co/image/ab67706c0000bebb042d86607b0f67a0db918aaa",
                    "width": null
                }
            ],
            "name": "THE ERAS TOUR SETLIST (in order)",
            "owner": {
                "display_name": "addie (taylor’s version)",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/gy7r24emokgau7hx89gqdz0l2"
                },
                "href": "https://api.spotify.com/v1/users/gy7r24emokgau7hx89gqdz0l2",
                "id": "gy7r24emokgau7hx89gqdz0l2",
                "type": "user",
                "uri": "spotify:user:gy7r24emokgau7hx89gqdz0l2"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MTkxLDAxOTZiYzhjOTI5Yzc0NDA2Y2RhODZiMGViZWU1YzkzYWFlMWRhYWQ=",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/6qSYIKJihVKpWr2HDeHjxS/tracks",
                "total": 43
            },
            "type": "playlist",
            "uri": "spotify:playlist:6qSYIKJihVKpWr2HDeHjxS"
        }
    ],
    "limit": 1,
    "next": "https://api.spotify.com/v1/users/12157798584/playlists?offset=1&limit=1",
    "offset": 0,
    "previous": null,
    "total": 74
}
```




## User Stories

| # | Name | Description | Priority | Dependent on # |
|----|----|-------------|----|----|
| 1  | Log in to Spotify | AAU, I want to be able to log in to my Spotify account to view data about my account | 1 |  |
| 2  | Home page info | AAU, I want to be able to see which account is logged in on the home page, including my picture and display name, along with instructions for how to use the application | 1 | 1 |
| 3  | View playlists | AAU, I want to view all of my saved playlists from my Spotify account | 1 | 1 |
| 4  | View playlist details | AAU, I want to view all of the tracks within my saved playlists, as well as analyses of the tracks on the playlist, including the playlists' energy, danceability, and musical positiveness (valence)  | 1 | 3 |
| 5  | View track details | AAU, I want to view each track's main audio features, including loudness, tempo, time signature, and key on the playlist details page | 1 | 3 |
| 6  | View metrics | AAU, I want to view my Spotify metrics, including my top artists, and top songs from the last 4 weeks | 1 | 1 |
| 7  | Sort by track features | AAU, I want to be able to sort the tracks on my playlist by loudness, tempo, time signature, and key | 2 | 5 |
| 8  | Additional metrics | AAU, I want to be able to see my top artists and top songs from the last 6 months, and of all time | 2 | 6 |
| 9  | Dark mode and light mode | AAU, I want to be able to toggle between a light mode display and a dark mode display on the application | 2 |  |
| 10  | Search tracks | AAU, I want to be able to search for tracks on Spotify to view the track's audio features, so I can access any song on Spotify, rather than just my the tracks in my saved playlists | 3 |  |
| 11  | Search playlists | AAU, I want to be able to search for playlists on Spotify to view the playlist's details, so I can access any playlist on Spotify, rather than just my saved playlists | 3 |  |
| 12  | Search albums | AAU, I want to be able to search for albums on Spotify to view the album's details, such as the overall energy, danceability, and musical positiveness (valence) | 3 |  |




