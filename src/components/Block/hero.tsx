import React, { FC } from 'react';

import { BlockInterface } from './interface';
import RichText from '@/components/richText';

const Hero: FC<BlockInterface> = ({ data }) => {
  const divStyle = {
    backgroundImage: `url('${data?.image?.url}')`,
    backgrounSize: 'cover'
  };

  return (
    <div className="hero min-h-screen bg-base-200" style={divStyle}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          {data?.title && <h1 className="text-5xl font-bold">{data?.title}</h1>}
          {data?.title && <h2 className="text-3xl">{data?.subtitle}</h2>}
          {data?.description && <RichText richTextDocument={data.description} />}
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
