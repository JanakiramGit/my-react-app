import http from '../http-common';

class TodosDataService{

	getAll(){
		return http.get('/todos');
	}

	create(data) {
    	return http.post('/add', data);
  	}

  	deleteTodo(id){  		
  		return http.delete('/delete/' + id);
  	}

  	updateTodo(id, data){
  		// console.log(id);
  		return http.put('/update/' + id, data);
  	}
}

//Note the differnce here as we return it with 'new' keyword
export default new TodosDataService();