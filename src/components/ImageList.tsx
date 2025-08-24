import searchPhotos from "../api/unsplash-api";

function ImageList() {
    searchPhotos( {query: "cats", page: 1, per_page: 10 }).then(data => {
        console.log(data);
        return <div>Image List Component</div>
    });
    return <div>Image List Component</div>
}

export default ImageList;