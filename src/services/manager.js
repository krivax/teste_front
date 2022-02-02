import Api from './Api';

class Manager {
  create(values) {
    return Api.post('/indexadores', values)
  }
  async getAll(){
    const response = await Api.get('/indexadores');
    console.log('aqui tem os indexadores', response);
    const data = response.data;
    return data.data;
  }
  async get(id){
    const response = await Api.get(`/indexadores/${id}`);
    const data = response.data;
    return data.data;
  }

  async update(id, data) {
    const response = await Api.put(`/indexadores/${id}`, data);
    const data_1 = response.data;
    return data_1.data;
  }
  delete(id){
    return Api.delete(`/indexadores/${id}`)
  }
};

export default new Manager();