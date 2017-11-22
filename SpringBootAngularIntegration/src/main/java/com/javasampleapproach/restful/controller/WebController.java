package com.javasampleapproach.restful.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/api")
public class WebController {


	
	private Map<Integer, Dashboard> authors = new HashMap<Integer, Dashboard>(){
		{
	        put(1, new Dashboard(1, "History", "These stories are by contemporary authors.If you’ve never read these authors before, their free short stories will give you a taste of their style before you commit to one of their longer works. There’s something for everyone, with stories in genres ranging from sci-fi to historical fiction to horror.", "Carl", "12/10/17", "assets/images/carl.jpeg" ));
	        put(2, new Dashboard(2, "Fiction", "These stories are by contemporary authors.If you’ve never read these authors before, their free short stories will give you a taste of their style before you commit to one of their longer works. There’s something for everyone, with stories in genres ranging from sci-fi to historical fiction to horror.", "Max", "12/10/17", "assets/images/max.jpeg"));
	        put(3, new Dashboard(3, "Fiction", "These stories are by contemporary authors.If you’ve never read these authors before, their free short stories will give you a taste of their style before you commit to one of their longer works. There’s something for everyone, with stories in genres ranging from sci-fi to historical fiction to horror.", "Ria", "12/10/17", "assets/images/elizabeth.jpg"));
	    }
	};
	int id;
	@GetMapping(value="/dashboard")
	public List<Dashboard> getAllDashboard(){
		List<Dashboard> results = new ArrayList<Dashboard>();
		for(Map.Entry<Integer, Dashboard> entry : authors.entrySet()) {
			Dashboard value = entry.getValue();
			results.add(value);
		}
		return results;
	}
	
	@PostMapping(value="/dashboard")
	public Dashboard postAuthor(@RequestBody Dashboard dashboard){
		id = authors.size() +1;
		System.out.println("size is" + id);
		//id++;
		System.out.println("added id = " +  id);
		dashboard.setId(id);
		authors.put(id, dashboard);
		return dashboard;
	}

	@DeleteMapping(value="/dashboard/{id}")
	public void deleteAuthor(@PathVariable int id){
		System.out.println("size is" + id);
		System.out.println("deleted id =" + id);
		authors.remove(id);
	}	
}