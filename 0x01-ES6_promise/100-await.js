import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const photo = await uploadPhoto(fileName);
    const user = await createUser({ firstName, lastName });
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
