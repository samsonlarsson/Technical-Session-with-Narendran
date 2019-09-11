import React from "react";
import Storage from './Storage';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            image: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
        this.getImage()
    }

    handleSubmit(event) {
        console.log(this.state.selectedFile)
        var fireBase = new Storage()
        fireBase.storeNewFile(this.state.selectedFile)
        event.preventDefault();
    }

    async getImage() {
        var fireBase = new Storage()
        var url = fireBase.getFile()
       //    alert(url)
        this.state.image = url
    }

    render() {
        this.getImage()
        return (
            <div>
                <h3>Current Profile Pic</h3>

                <div class="jumbotron">
                    <img src={this.state.image} id="profile" />
                </div>

                <hr />
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group row">
                        <div class="form-group">
                            <label for="exampleInputFile">Image Upload</label>
                            <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" onChange={this.onChangeHandler} />
                        </div>
                        <button type="submit" class="btn btn-primary">Upload</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Profile