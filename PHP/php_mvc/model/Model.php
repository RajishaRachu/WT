<?php
include_once("model/Book.php");

class Model{
	public function getBookList()
	{
		return array(
		"HP" => new Book("HP","JK Rowling","Magic"),
		"Jungle Book" => new Book("Jungle Book","Rudyard Kipling","A jungle Story"),
		"abc abc" => new Book("xyz","rajisha","pqr")
		);
	}
	 public function getBook($title)  
    {            
        $allBooks = $this->getBookList();  
        return $allBooks[$title];  
    }  
}
?>