import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Tab from "@/components/ui/Tab";
import { sendForm } from "@/lib/api";
import backgroundImage from "@/public/destination/background-destination-desktop.jpg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { AiOutlineCheck } from "react-icons/ai";

function ticket() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await sendForm(data);
    } catch (error) {
      setLoading(false);
      error = errors;
    }
    setLoading(false);
    setSubmitted(true);
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
              <button type="submit" className="btnSub">
                <AiOutlineCheck />
              </button>
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
              {loading ? (
                <button
                  disabled
                  className="disBtn flex justify-center items-center"
                >
                  <ImSpinner9 className="animate-spin text-lg" />
                </button>
              ) : (
                <button type="submit" className="btn">
                  Book a ticket
                </button>
              )}
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
