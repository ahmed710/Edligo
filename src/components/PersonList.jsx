import React, { useState, useEffect } from "react";


export default function App() {
 const [data, setData] = useState([]);
 
 useEffect(() => {
  fetch("https://dummy.restapiexample.com/api/v1/employees")
    .then(response => response.json())
    .then(result => setData(result.data || []))

},[]);
 const [search,setSearch]=useState('') ;
 console.log(search) ;

 const [order,setOrder]=useState("ASC"); 
 const sorting =(col)=>{
  if (order === "ASC"){
    const sorted=[...data].sort((a,b)=>
    a[col].toLowerCase() > b[col].toLowerCase()? 1 : -1
    );
    setData(sorted) ; 
    setOrder("DSC"); 
  }
  if (order === "DSC"){
    const sorted=[...data].sort((a,b)=>
    a[col].toLowerCase() < b[col].toLowerCase()? 1 : -1
    );
    setData(sorted) ; 
    setOrder("ASC"); 
  }
 }


  const handleDelete =(index,e)=>{
    e.target.parentNode.parentNode.parentNode.deleteRow(index)
  }


  const info= data.map((item,i) => {
  return (item);
}) ;


  return (
<div class="max-w-xxl mx-auto">
<div class="flex flex-col">
  <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden ">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead class="bg-gray-100 dark:bg-gray-700">
                      <tr>
                          <th scope="col" class="p-4">
                              <div class="flex items-center">
                                  <th>id</th>
                              </div>
                          </th>
                          <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400" onClick={()=>sorting("employee_name")}>
                              Employee Name
                          </th>
                          <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                          Employee Salary
                          </th>
                          <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                             Employee Age
                          </th>
                          <th scope="col" class="p-4">
                              <span class="sr-only">🔽</span>
                          </th>
                      </tr>
                  </thead>

                  
                  {info.filter((item)=>{return search.toLowerCase()=== '' ?
                   item : item.employee_name.toLowerCase().includes(search)})
                   .map(({id,employee_name,employee_salary,employee_age,profile_image},{index}) =>
                  <tr class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    
                                <th scope="col" class="p-4">
                              <div class="flex items-center">
                                  <th>{id}</th>
                              </div>
                          </th>
                                </div>
                            </td>
                            
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white" onClick={()=>sorting("employee_name")} >{employee_name}</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white" >{employee_salary}</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white" >{employee_age}</td>
                            <td class="font-medium text-blue-300"><button onClick={e => handleDelete(index,e)}>Delete</button></td>
                            
                            
                          
                            <td>
                            <div class="relative h-10 w-10 border before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4
                             before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute 
                             after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300
                              after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)]
                               hover:after:w-[calc(100%+16px)]"><img src={profile_image} alt='img' className="rounded"/></div>
                          </td>
                          
                            
                            </tr>)}

                            <tr><div class="p-4">
			<label for="table-search" class="sr-only">Search</label>
			<div class="relative mt-1">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clip-rule="evenodd"></path>
					</svg>
				</div>
				<textarea type="text" id="table-search" onChange={(e)=>setSearch(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
        </div>
			</div></tr>
                

                            
                  </table>
                  
                  </div>
                  </div>
                  </div>
                  </div>
    </div>
    
  );
}