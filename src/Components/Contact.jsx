const Contact = () => {
    return (
        <form class="contact">
            <div class="mb-3">
                <label for="f-name" class="form-label">First Name</label>
                <input type="text" class="form-control" id="f-name" />
            </div>
            <div class="mb-3">
                <label for="l-name" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="l-name" />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}


export default Contact