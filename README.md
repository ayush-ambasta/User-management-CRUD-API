
# User management CRUD API

In this project a user management system was build where user can perform following operations:

1. **Create a user**: In this operation a user will be created with username,password, name, phone number.

2. **Update a user**: In this operation the user will be able to update password, name or phone number.

3. **Get details of a user based on username**: In this operation the user will be able to get details of a user on the basis of username

4. **Delete user**: In this operation user will be deleted on the basis of username


## API Reference

#### Create new user

```http
  POST /user/create
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**|
| `name` | `string` | **Required**|
| `password` | `string` | **Required**|
| `phoneNumber` | `string` | **Required**|



#### Update user

```http
  PUT /user/update/${username}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required** |
| `name`      | `string` | to update name|
| `password`      | `string` | to update password|
| `phoneNumber`      | `string` | to update phoneNumber |


#### Get details of  user

```http
  GET /user/getdetails/${username}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required** |


#### Delete user

```http
  DELETE /user/delete/${username}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required** |
