import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const AddBlog = () => {
	const[data, setData] = useState({
		title:'',
		author:'',
		description:'',
		image:null,
		category:''

	})
	const navigate = useNavigate()
	const[category,setCategory]=useState([])

	useEffect(()=>{
		axios.get(`http://127.0.0.1:8000/api/addlist`)
		.then(res=>setCategory(res.data))
		.catch(err=>console.log(err))
	},[])

	const handleInput=(e)=>{
		const{name, value} = e.target
		if(name === "image"){
			setData((items)=>({
				...items,
				image: e.target.files[0]
			}))
		}else{
			setData((items)=>({
				...items,
				[name]:value
			}))
		}
		
	}

	const submitHandle=async (e)=>{
		e.preventDefault()
        console.log(data.title)
		const formData = new FormData()
		formData.append('title', data.title)
		formData.append('author', data.author)
		formData.append('image', data.image)
		formData.append('category', data.category)
		formData.append('description', data.description)
		try{
			const response = await axios.post(`http://localhost:8000/blog`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			if(response.status === 201){
				toast.success('Blog added successfully !')
				setData({
					title:"",
					category:"",
					author:"",
					description:"",
					image:null
				})
		
				navigate('/admin/addblog') 
				
			}else{
				toast.error(' Please try again !')
			}
		} catch(err){
			toast.error("Add blog failed")
		}
	 

		
		
	}
	return (
		<>
		 <ToastContainer theme='colored' position='top-right'/>
		<div className="flex items-center justify-center p-12">
		
		<div className="mx-auto w-full max-w-[550px] bg-white">
				<form onSubmit={submitHandle}>
						<div className="mb-5">
								<label for="title" className="mb-3 block text-base font-medium text-[#07074D]">
										 Title
								</label>
								<input type="text" name="title" 
								value={data.title}
								onChange={handleInput}
								id="title" placeholder="Enter your title"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
						</div>
						<div className="mb-5">
								<label for="author" className="mb-3 block text-base font-medium text-[#07074D]">
										Author
								</label>
								<input type="text"
								 value={data.author}
								 onChange={handleInput}
								name="author" id="author" placeholder="Write author name"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
						</div>
						<div className="mb-5">
								<label for="description" className="mb-3 block text-base font-medium text-[#07074D]">
										Description
								</label>
								<textarea name="description"
								 value={data.description}
								 onChange={handleInput}
								id="description" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" placeholder='write description'></textarea>
							 
						</div>
						<div className="-mx-3 flex flex-wrap">
								<div className="w-full px-3 sm:w-1/2">
										<div className="mb-5">
												<label for="" className="mb-3 block text-base font-medium text-[#07074D]">
														Category
												</label>

												<select name="category" id="category" 
												value={data.category}
												 onChange={handleInput}
												className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
													<option value="">choose one category</option>
													{category.map((c,i)=>(
														<option value={c.id} key={i}>{c.category_name}</option>
													))}
												</select>
											 
										</div>
								</div>
								<div className="w-full px-3 sm:w-1/2">
										<div className="mb-5">
												<label for="image" className="mb-3 block text-base font-medium text-[#07074D]">
														Image
												</label>
												<input type="file" name="image" id="image"
			
												 onChange={handleInput}
														className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
										</div>
								</div>
						</div>

					
						<div>
								<button type='submit'
										className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
										Add Blog
								</button>
						</div>
				</form>
		</div>
</div>
		</>
	)
}

export default AddBlog