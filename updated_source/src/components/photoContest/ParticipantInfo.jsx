import { Link } from "react-router-dom";

function ParticipantInfo({ register, watch, errors }) {
  const isChecked = watch("terms", false);
  return (
    <div className="participant-info w-[870px] max-md:w-full mx-auto mt-20 custom-xs:mt-8 pb-[150px] max-md:pb-[40px] custom-xs:!pb-0">
      {/* about you  */}
      <div>
        <div className="mb-6">
          <h3 className="text--sm font-bold text-headingColor">
            Tell us about you
          </h3>
          <p className="mt-2 custom-xs:text-sm">All fields are required</p>
        </div>
        <div className="flex custom-xs:flex-col items-start gap-6 custom-xs:gap-1">
          <div className="mt-3 w-1/2 custom-xs:w-full">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              {...register("first_name", { required: "Name is required" })}
            />
            {errors.first_name && (
              <span className="error-message mt-2 inline-block text-red-500">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="mt-3 w-1/2 custom-xs:w-full">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              {...register("last_name", { required: "Last Name is required" })}
            />
            {errors.last_name && (
              <span className="error-message mt-2 inline-block text-red-500">
                {errors.last_name.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex custom-xs:flex-col items-start gap-6 custom-xs:gap-1">
          <div className="mt-3 custom-xs:mt-4 w-1/2 custom-xs:w-full">
            <label htmlFor="social_platform_url">Social Platform Url</label>
            <input
              type="text"
              id="social_platform_url"
              name="social_platform_url"
              placeholder="Social Platform URL"
              {...register("social_platform_url", {
                required: "Social Platform URL is required",
              })}
            />
            {errors.social_platform_url && (
              <span className="error-message mt-2 inline-block text-red-500">
                {errors.social_platform_url.message}
              </span>
            )}
          </div>
          <div className="mt-3 w-1/2 custom-xs:w-full">
            <label htmlFor="user_name">Username</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="User name"
              {...register("user_name", { required: "Username is required" })}
            />
            {errors.user_name && (
              <span className="error-message mt-2 inline-block text-red-500">
                {errors.user_name.message}
              </span>
            )}
          </div>
        </div>
      </div>
      {/* about your story  */}
      <div>
        <div className="mb-6 mt-6 custom-xs:mt-8">
          <h3 className="text--sm font-bold text-headingColor">
            Tell us about your story
          </h3>
          <p className="mt-2">All fields are required</p>
        </div>
        {/* input pair  */}
        <div className="flex custom-xs:flex-col items-start gap-6 custom-xs:gap-1">
          <div className="mt-3 w-1/2 custom-xs:w-full">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <span className="error-message mt-2 inline-block text-red-500">
                {errors.title.message}
              </span>
            )}
          </div>
          <div className="mt-3 w-1/2 custom-xs:w-full">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              {...register("location", { required: "Location is required" })}
            />
            {errors.location && (
              <span className="error-message mt-2 inline-block text-red-500">
                {errors.location.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <div className="mt-3 custom-xs:mt-4 w-full">
            <label htmlFor="details">
              Tell us what happening in your submission, in 2-3 sentence
            </label>
            <textarea
              name="details"
              id="details"
              placeholder="Write here"
              {...register("details", { required: "Summary is required" })}
              className="custom-xs:!h-[140px]"
            ></textarea>
            {errors.details && (
              <span className="error-message mt-2 inline-block text-red-500">
                {errors.details.message}
              </span>
            )}
          </div>
        </div>
        <div className="mt-6">
          <label className="mb-2">
            Are there other people featured in your submission?
          </label>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <input
                className="!w-fit"
                type="radio"
                id="yes"
                name="other_people_featured"
                {...register("other_people_featured")}
              />
              <label className="!mb-0 cursor-pointer" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="!w-fit"
                type="radio"
                id="no"
                name="other_people_featured"
                {...register("other_people_featured")}
              />
              <label className="!mb-0 cursor-pointer" htmlFor="no">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="mt-[26px]">
          <h3 className="text--sm custom-md:text-[20px] custom-xs:text-[18px] text-headingColor mb-3">
            Agree to Terms + Conditions
          </h3>
          <p className="custom-xs:text-sm">
            The photos and videos you capture with Trekarius have the power to
            inspire the world but before we do anything with them, we need your
            permission. Checking this box represents that you have read and
            agree to our Terms + Conditions, and have obtained all necessary
            third party rights.
          </p>
          <div className="flex items-center gap-2 mt-6">
            <input
              className="!w-fit"
              type="checkbox"
              name="terms"
              id="terms"
              {...register("terms", {
                required: "Please agree with terms & condition",
              })}
            />
            <label className="!mb-0" htmlFor="terms">
              I Agree
            </label>
          </div>
          {errors.terms && (
            <span className="error-message mt-2 inline-block text-red-500">
              {errors.terms.message}
            </span>
          )}
        </div>
        {/* buttons  */}
        <div className="flex items-center justify-between mt-6">
          <Link to={"/contest"}>
            <button
              type="submit"
              className="min-w-[274px] max-md:min-w-[180px] custom-xs:!min-w-[150px] custom-xs:!py-2 max-md:p-3 p-4 bg-primaryOrange rounded-[12px] text-white duration-200 ease-in-out border-[2px] border-primaryOrange hover:bg-transparent hover:text-primaryOrange font-semibold"
            >
              Cancle
            </button>
          </Link>
          <button
            type="submit"
            disabled={!isChecked}
            className={`submit-btn min-w-[274px] max-md:min-w-[180px] custom-xs:!min-w-[150px] custom-xs:!py-2 max-md:p-3 p-4 bg-primaryOrange rounded-[12px] text-white duration-200 ease-in-out border-[2px] border-primaryOrange hover:bg-transparent hover:text-primaryOrange font-semibold`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParticipantInfo;
