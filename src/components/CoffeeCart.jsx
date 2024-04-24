import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCart = ({coffee, coffe, setCoffe}) => {

    const { _id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                       Swal.fire(
                          "Deleted!",
                          "Your coffee has been deleted.",
                         "success"
                    );
                    const remaining = coffe.filter(coff => coff._id !== _id)
                    setCoffe(remaining)
                }
            })
            }
          });

    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Movie"/></figure>
        <div className="flex w-full justify-between pr-10">
         <div>
         <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
         </div>
          <div className="card-actions justify-end">
          <div className="join join-vertical space-y-3">
            <button className="btn ">View</button>
            <Link to = {`/updeteCoffee/${_id}`}>
            <button className="btn ">Edit</button>
            </Link>
             <button onClick={() => handleDelete(_id)} className="btn bg-orange-600">X</button>
          </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCart;