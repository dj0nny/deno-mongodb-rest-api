import { db } from '../connection.ts';

import { User, newUser } from '../types.ts';

const users = db.collection('users');

const getUsers = async ({ response }: { response: any }) => {
  const usersList: User[] = await users.find();
  if (usersList) {
    response.status = 200;
    response.body = {
      success: true,
      data: usersList
    }
  } else {
    response.status = 400;
    response.body = {
      success: false,
    }
  }
}

const addUser = async ({ request, response }: { request: any ,response: any }) => {
  const body = await request.body();
  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      message: 'No data',
    }
  } else {
    const user: newUser = body.value;
    await users.insertOne(user);
    response.status = 201;
    response.body = {
      success: true,
      data: user
    }
  }
}

const updateUser = async({ params, request, response }: { params: any, request: any ,response: any }) => {
  const userId = params.id;
  const body = await request.body();
  const { matchedCount } = await users.updateOne({ _id: { "$oid": userId } },{ $set: { username: body.value.username, name: body.value.name, email: body.value.email, password: body.value.password } })
  if (matchedCount) {
    response.status = 201;
    response.body = {
      success: true,
      message: 'User updated'
    }
  }
}

const deleteUser = async({ params, response }: { params: any, response: any }) => {
  const userId = params.id;
  const deleteCount = await users.deleteOne({ _id: { "$oid": userId } });
  if (deleteCount) {
    response.status = 204;
    response.body = {
      success: true,
      message: 'User deleted'
    }
  }
}

export { getUsers, addUser, updateUser, deleteUser };