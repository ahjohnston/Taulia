import axios from 'axios';

const exports = {
  getEmail: () => {
    return axios('https://run.mocky.io/v3/09e642b5-b52f-43c1-837b-8ebf70c10813')
  }
}

export default exports;

