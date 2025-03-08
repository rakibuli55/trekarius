import { useState } from "react";
import Container from "../container/Container";
import { Controller, useForm } from "react-hook-form";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MapSection() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  // Toggle calendar visibility
  const toggleCalendar = (calendar) => {
    if (calendar === "start") {
      setShowStartCalendar((prev) => !prev);
      setShowEndCalendar(false);
    } else {
      setShowEndCalendar((prev) => !prev);
      setShowStartCalendar(false);
    }
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data: ", data);
  };

  return (
    <section className="px-10 max-md:px-0 pt-[110px] custom-xs:pt-[90px] pb-[80px] custom-xs:pb-10">
      <Container>
        <div>
          <h1 className="text--xl custom-sm:!text-[28px] custom-xs:!text-[24px] text-headingColor mb-6">
            Just Pick a location get started{" "}
          </h1>
        </div>
        <div>
          {/* map  */}
          <div>
            <iframe
              className="w-full h-[724px] custom-xl:h-[600px] custom-lg:h-[500px] custom-sm:h-[400px] custom-xs:h-[320px] custom-xs:rounded-[16px] rounded-[32px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3175489.0904951203!2d64.67011812876305!3d49.18778689927964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1733385532676!5m2!1sen!2sbd"
              loading="lazy"
            ></iframe>
          </div>
          <form
            className="map-form p-10 custom-md:p-6 mt-6 border border-[rgba(0,0,0,0.18)] rounded-[32px] grid gap-6 grid-cols-4 custom-sm:grid-cols-2 custom-xs:p-5 custom-xs:grid-cols-1 custom-xs:rounded-[16px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* start date  */}
            <div>
              <label htmlFor="start-date">Start Date</label>
              <div
                className="date-feild relative"
                onClick={() => toggleCalendar("start")}
              >
                <Controller
                  name="startDate"
                  control={control}
                  defaultValue={startDate}
                  render={({ field }) => (
                    <>
                      <p className="cursor-pointer font-medium text-headingColor">
                        {field.value.toDateString()}
                      </p>
                      {showStartCalendar && (
                        <div className="absolute custom-xs:w-[100%] z-10 custom-sm:top-0 custom-sm:left-0 custom-xs:top-0 custom-xs:left-0 bg-white shadow-md p-4 rounded-md">
                          <Calendar
                            onChange={(date) => {
                              field.onChange(date);
                              setShowStartCalendar(false);
                            }}
                            value={field.value}
                          />
                        </div>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
            {/* end date  */}
            <div>
              <label htmlFor="end-date">End Date</label>
              <div
                className="date-feild relative"
                onClick={() => toggleCalendar("end")}
              >
                <Controller
                  name="endDate"
                  control={control}
                  defaultValue={new Date()}
                  render={({ field }) => (
                    <>
                      <p className="cursor-pointer font-medium text-headingColor">
                        {field.value.toDateString()}
                      </p>
                      {showEndCalendar && (
                        <div className="absolute custom-xs:w-[100%] z-10 ustom-sm:top-0 custom-sm:right-0 custom-xs:top-0 custom-xs:right-0 bg-white shadow-md p-4 rounded-md">
                          <Calendar
                            onChange={(date) => {
                              field.onChange(date);
                              setShowEndCalendar(false);
                            }}
                            value={field.value}
                          />
                        </div>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
            {/* person date  */}
            <div>
              <label htmlFor="personNumber">Person Number</label>
              <input
                type="number"
                name="person"
                value="1"
                {...register("person")}
              />
            </div>
            <button
              type="submit"
              className="w-full p-4 px-6 custom-xs:p-[10px] custom-xs:text-sm bg-primaryBlue rounded-[12px] border-[2px] border-primaryBlue text-white font-semibold duration-200 ease-in-out hover:bg-transparent hover:text-primaryBlue"
            >
              Show Trip
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default MapSection;
