create database airbnb_db;
use airbnb_db;

create table user(
id integer primary key auto_increment,
firstName varchar(20),
lastName varchar(20),
email varchar(20),
phone varchar(10),
password varchar(100),
profileImage varchar(100),

    createdTimestamp timestamp DEFAULT CURRENT_TIMESTAMP

);

create table home (
id integer primary key auto_increment,
userId integer,
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

    image varchar(100),

    rent integer,
    cleaningFees integer,
    serviceFee integer,
    tax integer,

    createdTimestamp timestamp DEFAULT CURRENT_TIMESTAMP

);

alter table home add column image varchar(100);

create table amenity(
id integer primary key auto_increment,
homeId integer,

    swimmingPool integer(1) DEFAULT 0,
    hotTub integer(1) DEFAULT 0,
    patio integer(1) DEFAULT 0,
    bbqGrill integer(1) DEFAULT 0,
    poolTable integer(1) DEFAULT 0,
    outdoorDiningArea integer(1) DEFAULT 0,
    wifi integer(1) DEFAULT 0,
    tv integer(1) DEFAULT 0,
    kitchen integer(1) DEFAULT 0,
    washingMachine integer(1) DEFAULT 0,
    freeParking integer(1) DEFAULT 0,
    paidParking integer(1) DEFAULT 0,
    ac integer(1) DEFAULT 0,
    workspace integer(1) DEFAULT 0,
    outdoorShower integer(1) DEFAULT 0,
    smokeAlarm integer(1) DEFAULT 0,
    firstAidKit integer(1) DEFAULT 0,
    fireAlarm integer(1) DEFAULT 0,

    createdTimestamp timestamp DEFAULT CURRENT_TIMESTAMP

);

create table photo (
id integer primary key auto_increment,
homeId integer,
fileName varchar(100),
createdTimestamp timestamp DEFAULT CURRENT_TIMESTAMP
);

create table rating (
id integer primary key auto_increment,
homeId integer,
userId integer,
rating integer,
comment varchar(1000),

    createdTimestamp timestamp DEFAULT CURRENT_TIMESTAMP

);

create table wishlist (
id integer primary key auto_increment,
homeId integer,
userId integer,
createdTimestamp timestamp DEFAULT CURRENT_TIMESTAMP
);
