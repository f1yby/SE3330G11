# BackEnd Api

## User

### Add User

**method:** Post

**path:**`/user/add`

#### param

1. name
2. password
3. email
4. iconUrl

**return on success:** uid

### Auth

**method:** Post

**path:** `/user/auth`

#### param

1. name
2. password

**return on success:** uid

**return on failure** TODO

## FootPrint

### Add FootPrint

**method:** Post

**path:** `/footprint/add`

#### param

1. uid
2. trid

### Find FootPrint By Uid

**method:** Post

**path:** `/footprint/findByUid`

#### param

1. uid

**return on success**:`[{'fid'=1,'trid'=1,'date'=1,'location'='Shanghai'},...]`

### Find FootPrint By Uid And DatePeriod

**method:** Post

**path:** `/footprint/findByUidAndDatePeriod`

#### param

1. uid
2. dateStart
3. dateEnd

**return on success**:`[{'fid'=1,'trid'=1,'date'=1,'location'='Shanghai'},...]`

### Find FootPrint By Uid And Location

**method:** Post

**path:** `/footprint/findByUidAndLocation`

#### param

1. uid
2. location

**return on success**:`[{'fid'=1,'trid'=1,'date'=1,'location'='Shanghai'},...]`

### Find FootPrint By Uid And DatePeriod

**method:** Post

**path:** `/footprint/findByUidAndDatePeriodAndLocation`

#### param

1. uid
2. dateStart
3. dateEnd
4. location

**return on success**:`[{'fid'=1,'trid'=1,'date'=1,'location'='Shanghai'},...]`

## FootPrintPicture

### Add FootPrint Picture

**method:** Post

**path:** `/footprint/picture/add`

#### param

1. fid
2. latitude
3. longitude
4. pictureUrl

**return on success**:`OK`

**return on failure**:`Err`

### Find FootPrint Picture By Fid

**method:** Post

**path:** `/footprint/picture/findByFid`

#### param

1. fid

**return on success**:`[{'fid'=1,'latitude'='121','longitude'='21','pictureUrl'='www'},...]`

# Frontend Usage

## User Login and Register

1. In frontend  **config.js**  change **backendUrl** to your own.
2. create Database footprint, add user g11
3. You need to **register** first, then you can login via account registered