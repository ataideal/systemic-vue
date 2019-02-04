<script>
import axios from 'axios';

export default {
  getUsers() {
    return axios.get('/users');
  },
  newUser(user) {
    return axios.post('/users',{user: user});
  },
  editUser(user) {
    return axios.put(`/users/${user.id}`,{user: user});
  },
  deleteUser(user){
    return axios.put(`/users/${user.id}`);
  }
};
</script>
