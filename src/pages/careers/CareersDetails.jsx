import { useLoaderData, Link } from "react-router-dom";


export const CareersDetails = () => {

  const career = useLoaderData();
  return (
    <div className="mt-10 text-zinc-100 bg-gray-800 p-5 rounded-md">
     <h1 className="text-2xl mb-5 ">Careers Details for: {career.title} </h1>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="mt-5 mb-5">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
          explicabo nobis nulla esse placeat fugiat enim quasi temporibus nisi
          eius.
        </p>
      </div>
      <Link to='/careers' className="bg-red-600 px-2 rounded-md ">Back to Careers Page</Link>
      
    </div>
  );
};

export const CareersDetailsLoaders = async ({ params }) => {
  const { id } = params;
  const res = await fetch ('https://real-pear-jaguar-suit.cyclic.app/careers/' + id)
  if(!res.ok){
    throw Error("Could not Find this Page")
  }
  return res.json();
};
