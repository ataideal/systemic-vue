<script>
import axios from 'axios';

export default {
  login(cpf, password) {
    return axios.post('/login', {cpf, password});
  }
};
</script>
