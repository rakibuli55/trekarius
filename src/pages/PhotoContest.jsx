import { api } from "@/api";
import HelmetComponent from "@/components/common/HelmetComponent";
import Container from "@/components/container/Container";
import FileUploder from "@/components/photoContest/FileUploder";
import GetRewarded from "@/components/photoContest/GetRewarded";
import ParticipantInfo from "@/components/photoContest/ParticipantInfo";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import checkCircle from "../assets/images/check-circle.png";
import Close from "../assets/images/close-line.png";
import { useQuery } from "@tanstack/react-query";

function PhotoContest() {
  const [step, setStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append files to the FormData
    uploadedFiles.forEach((file, index) => {
      formData.append(`files[${index}]`, file);
    });

    // Append other form data
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append(
      "other_people_featured",
      data.other_people_featured === "on" ? 1 : 0
    );

    const loadingToast = toast.loading("Submitting your contest...");
    try {
      const response = await api.post("/attend/contest", formData);

      if (response.status === 201) {
        toast.success("Contest submitted successfully!", {
          id: loadingToast,
        });
        setDialogOpen(true);
      }
    } catch (error) {
      console.log(error);
      toast.error(`${error?.response?.data?.message}`, { id: loadingToast });
    }
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const handleFileChange = (files) => {
    setUploadedFiles(files);
  };

  const { data: photoContestMetaData, isLoading: metaLoading } = useQuery({
    queryKey: ["photoContestMetaData"],
    queryFn: async () => {
      const response = await api.get(
        "/seo/page/content?page=contest_content_upload"
      );
      return response?.data?.data;
    },
  });

  return (
    <>
      <HelmetComponent item={photoContestMetaData} />
      <section className="min-h-screen max-md:min-h-full pb-[100px] custom-xs:pb-[60px]">
        <GetRewarded step={step} onPrev={handlePreviousStep} />
        <Container>
          <div className="px-10 max-md:px-0 mt-8">
            {/* Progress */}
            <div className="progress w-full relative h-6 custom-xs:!h-3 max-md:h-4 rounded-[100px] bg-rewardBg">
              <div
                className="progress-bar h-full absolute top-0 left-0 bottom-0 duration-200 ease-in-out bg-primaryOrange rounded-[100px]"
                style={{ width: `${(step / 2) * 100}%` }}
              ></div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              {step === 1 && (
                <Controller
                  name="files"
                  control={control}
                  defaultValue={[]}
                  render={({ field: { onChange, value } }) => (
                    <FileUploder
                      onFileChange={(files) => {
                        handleFileChange(files);
                        onChange(files);
                      }}
                      value={value}
                      onNext={handleNextStep}
                    />
                  )}
                />
              )}
              {step === 2 && (
                <ParticipantInfo
                  control={control}
                  errors={errors}
                  register={register}
                  watch={watch}
                  previousStep={handlePreviousStep}
                  nextStep={handleNextStep}
                />
              )}
            </form>
          </div>
        </Container>

        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="p-[60px] custom-xs:py-8 custom-xs:px-5 custom-xs:rounded-[16px] custom-xs:!max-w-[95%] custom-sm:py-8 custom-sm:px-5 custom-sm:rounded-[16px] custom-sm:!max-w-[95%] custom-md:!max-w-[95%] !max-w-[896px] form-dialouge">
            <DialogHeader>
              <img
                className="h-[199px] w-[199px] custom-xs:h-[80px] custom-xs:w-[80px] custom-sm:h-[100px] custom-sm:w-[100px] custom-md:w-[130px] custom-md:h-[130px] mx-auto"
                src={checkCircle}
                alt=""
              />
              <h3 className="text-[32px] custom-xs:text-[20px] custom-sm:text-[22px] font-semibold text-headingColor !mt-[65px] custom-xs:!mt-5 custom-sm:!mt-5 custom-md:!mt-5 text-center">
                We have received your submission, we will let you know shortly
              </h3>
            </DialogHeader>
            <button
              onClick={() => setDialogOpen(false)}
              className="h-10 w-10 custom-xs:top-2 custom-xs:right-2 flex items-center justify-center rounded-full bg-rewardBg absolute top-5 right-5"
            >
              <img src={Close} alt="" />
            </button>
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
}

export default PhotoContest;
