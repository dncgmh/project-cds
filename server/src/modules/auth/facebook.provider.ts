import axios from 'axios';

const facebook = async (access_token: string) => {
  try {
    const fields = 'id, name, first_name, last_name, email, picture';
    const url = 'https://graph.facebook.com/me';
    const params = { access_token, fields };
    const response = await axios.get(url, { params });
    const { id, name, first_name, last_name, email, picture } = response.data;
    return {
      service: 'facebook',
      picture: picture.data.url,
      id,
      email,
      name,
      firstName: first_name,
      lastName: last_name
    };
  } catch (error) {
    return error;
  }
};

export default facebook;
