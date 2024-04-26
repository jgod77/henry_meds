# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Description

My design ended up being a little too ambitious so didn't have enough time to finish styling within the 3 hour window.

The booking modal is also incomplete the idea was to have multiple providers you could click through so you would see Dr. Name | Calendar | Booking Times. It is currently hardcoded to get provider id: 1. This method would require another API call to return all providers with any availabilities in the month. Then when a provider and date are selected the timeslot API would handle returning the available slots for the specified day.

It currently has hard coded mock data for timeslots currently has slots available for 4/25 - 4/30 If you need more dates populated you can update the datestamp in the filename.

There are no `Post` requests currently, there are just console.log()'s to show where the submit would happen

## Supporting API

### `Get Provider for Dashboard`
```
{
  "id": 1,
  "name": "John Doe",
  "schedule": {
    "monday": {
      "start": "09:00",
      "end": "17:00"
    },
    "tuesday": {
      "start": "09:00",
      "end": "17:00"
    },
    "wednesday": {
      "start": "09:00",
      "end": "17:00"
    },
    "thursday": {
      "start": "09:00",
      "end": "15:00"
    },
    "friday": {
      "start": "09:00",
      "end": "17:00"
    },
    "saturday": {
      "start": null,
      "end": null
    },
    "sunday": {
      "start": null,
      "end": null
    }
  },
  "appointments": [
    {
      "id": 1,
      "starts_at": "2019-01-01 09:00",
      "duration": 15,
      "client": {
        "id": 1,
        "name": "Jane Doe"
      },
      "status": "confirmed",
      "confirmed_at": "2019-01-01 08:45",
      "canceled_at": null
    },
    ...
  ]
}
```

### `Get Client for Dashboard`
```
{
  "id": 1,
  "name": "John Doe",
  "appointments": [
    {
      "id": 1,
      "starts_at": "2019-01-01 09:00",
      "duration": 15,
      "status": "confirmed",
      "confirmed_at": "2019-01-01 08:45",
      "canceled_at": null,
      "provider": {
        "id": 1,
        "name": "Dr. Smith"
      }
    },
    {
      "id": 4,
      "starts_at": "2019-01-01 09:30",
      "duration": 15,
      "status": "pending",
      "confirmed_at": null,
      "canceled_at": null,
      "provider": {
        "id": 1,
        "name": "Dr. Smith"
      }
    }
  ]
}

```

### `Timeslots`
Takes :provider_id, :date

Returns list of available timeslots based on the providers schedule and current appointments
```
[
  {
    "id": 1,
    "start": "09:30"
  },
  {
    "id": 2,
    "start": "10:00"
  },
  {
    "id": 3,
    "start": "10:30"
  },
  ...
]

```

### `Appointment`

#### Cancel
Takes :appointment_id

Calling this would update the `status` to "canceled" and update `canceled_at`
#### Confirm
Takes :appointment_id

Calling this would update the `status` to "confirmed" and update `confirmed_at`

