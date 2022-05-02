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

**path:** `user/auth`

#### param

1. name
2. password

**return on success:** uid

**return on failure** TODO

## FootPrint

### Add FootPrint

**method:** Post

**path:** `footprint/add`

#### param

1. uid
2. trid

### Find FootPrint By Uid

**method:** Post

**path:** `footprint/findByUid`

#### param
1. uid

**return on success**:`[{'fid'=1,'trid'=1},...]`