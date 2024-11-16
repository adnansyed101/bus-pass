import bus from "../assets/logo.png"

const Hero = () => {
  return (
    <div className="hero bg-base-200 p-32">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <figure className="pt-6 pb-2 border-b-2">
            <img src={bus} alt="bus" className="w-2/3" />
        </figure>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <button className="btn btn-accent text-white">Login</button>
          </div>
          <p>Don&apos;t have an account ? <span className="text-green-400">Register</span></p>
        </form>
      </div>
    </div>
  );
};

export default Hero;
