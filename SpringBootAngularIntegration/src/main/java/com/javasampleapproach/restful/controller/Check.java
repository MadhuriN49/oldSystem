package com.javasampleapproach.restful.controller;
import java.sql.*;

public class Check extends Exception{

	public static void main(String[] args) throws SQLException {
		int a=-8;  
		int b=10;  
		System.out.println(~a);
		System.out.println(++a + a++);//10+12=22  
		System.out.println(b++ + b++);//10+11=21  	
		
//		try {
//			Class.forName("com.mysql.jdbc.Driver");
//			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/db");
//			Statement stmt = con.createStatement();
//			ResultSet rs =  stmt.executeQuery("sql query statement");
//			while(rs.next()) {
//				System.out.println(rs.getInt(0));
//			}
//			con.close();
//			new Exception();
//		} catch (ClassNotFoundException e) {
//			e.printStackTrace();
//		}
	}
	
	
//	Connection con = Driver
}
