import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Tab from "@/components/ui/Tab";
import backgroundImage from "@/public/destination/background-destination-desktop.jpg";
import { useState } from "react";
import { useForm } from "react-hook-form";

function ticket() {
  const [submitted, useSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    useSubmitted(true);
  };

  return (
    <>
      <Tab name={"Reserve your seat!"} />
      <Background background={backgroundImage} />
      <div className="pageFormat">
        <Nav />
        <div className="w-full flex flex-col justify-center items-center space-y-8 transition-all duration-1000">
          <h1 className="text-center text-xl tracking-widest">
            Book your ticket now and get a confirmation email instantly!
          </h1>
          <h2 className="text-center text-xs opacity-60">
            shshh! you made it to the secret ticket page..
          </h2>
          {submitted ? (
            <>
            <p className="text-4xl tracking-widest text-center">START PACKING RIGHT NOW!</p>
            <h4 className="text-center opacity-70 text-md">Yes..it's that fast!!</h4>
            </>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-4 max-w-xl m-auto"
            >
              <label>Full Name</label>
              <input
                {...register("fullname", { required: true })}
                type="text"
              />
              {errors.fullname && (
                <p className="text-xs text-orange-700">
                  Please enter your full name
                </p>
              )}
              <label>Email</label>
              <input {...register("email", { required: true })} type="email" />
              {errors.email && (
                <p className="text-xs text-orange-700">
                  Please enter a valid email
                </p>
              )}
              <label>Destination</label>
              <select
                defaultValue="Mars"
                {...register("destination", { required: true })}
              >
                <option value="mars">Mars</option>
                <option value="moon">Moon</option>
                <option value="europa">Europa</option>
                <option value="titan">Titan</option>
              </select>
              <label>Travel date</label>
              <input {...register("date", { required: true })} type="date" />
              {errors.date && (
                <p className="text-xs text-orange-700">
                  Please enter a travel date
                </p>
              )}
              <button type="submit" className="btn">
                Book a ticket
              </button>
              <h6 className="text-xs opacity-50">
                You will be notified in the email provided shortly after
              </h6>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default ticket;
