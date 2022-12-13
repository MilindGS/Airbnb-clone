### backend

- server: express
- database: mysql

```sql

-- create new database
create database airbnb_db;
use airbnb_db;

-- tables

-- user
create table user(
    id integer primary key auto_increment,
    firstName varchar(20),
    lastName varchar(20),
    email varchar(20),
    phone varchar(10),
    birthDate date,
    password varchar(100),
    profileImage varchar(100),

    createdTimestamp timestamp DEFAULT CURRENT_TIMESTAMP
);

-- home
create table home (
    id integer primary key auto_increment,
    userId integer,

    -- 1: flat,
    -- 2: house,
    -- 3: secondary unit
    -- 4: unique space
    -- 5: bed and breakfast
    -- 6: boutique hotel
    type integer,
    addressLine1 varchar(50),
    addressLine2 varchar(50),
    addressLine3 varchar(50),
    city varchar(50),
    state varchar(50),
    zipCode varchar(6),

    guests integer,
    beds integer,
    bedrooms integer,
    bathrooms integer,

    title varchar(100),
    tagline varchar(100),
    shortDescription varchar(500),
    longDescription varchar(10000),

    rent integer,
    cleaningFees integer,
    serviceFee integer,
    tax integer,

    createdTimestamp timestamp DEFAULT CURRENT_TIMESTAMP
);

-- home amenities
create table amenity(
    id integer primary key auto_increment,
    homeId integer,

    swimmingPool integer(1) DEFAULT 0,
    hotTub integer(1) DEFAULT 0,
    patio integer(1) DEFAULT 0,
    bbqGrill integer(1) DEFAULT 0,
    poolTable integer(1) DEFAULT 0,
    outdoorDiningArea integer(1) DEFAULT 0

    wifi integer(1) DEFAULT 0,
    tv integer(1) DEFAULT 0,
    kitchen integer(1) DEFAULT 0,
    washingMachine integer(1) DEFAULT 0,
    freeParking integer(1) DEFAULT 0,
    paidParking integer(1) DEFAULT 0,
    ac integer(1) DEFAULT 0,
    workspace integer(1) DEFAULT 0,
    outdoorShower integer(1) DEFAULT 0

    smokeAlarm integer(1) DEFAULT 0,
    firstAidKit integer(1) DEFAULT 0,
    fireAlarm integer(1) DEFAULT 0,createdTimestamp timestamp DEFAULT CURRENT_TIMESTAMP
);

-- home photos
create table photo (
    id integer primary key auto_increment,
    homeId integer,
    fileName varchar(100),
    createdTimestamp timestamp DEFAULT CURRENT_TIMESTAMP
);

-- home ratings
create table rating (
    id integer primary key auto_increment,
    homeId integer,
    userId integer,
    rating integer,
    comment varchar(1000),

    createdTimestamp timestamp DEFAULT CURRENT_TIMESTAMP
);

-- booking
-- wishlist

```

### frontend

- library: React
- functionality

  - user
    - signup
    - signin
    - forgot password
    - reset password
  - home
    - host a home
    - search homes with filters
    - show details of a selected home
    - add/remove home to a wishlist
    - book a home
    - add review with rating
    - cancel booking
    - get all bookings
    - checkin and checkout

- if possible
  - pay rent (payment gateway - stripe)
