import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loaderUser = useLoaderData();
    console.log(loaderUser);
    return (
        <div>
            <h3>Update information of {loaderUser.name}</h3>
        </div>
    );
};

export default Update;