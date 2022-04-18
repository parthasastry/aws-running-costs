import React from "react";

const FAQ = () => {
  return (
    <div name="faq" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="grid grid-cols-2 gap-4 p-10 px-2">
          <div>
            <h3 className="font-bold text-lg">
              What is the purpose of this website?
            </h3>
            <p className="text-lg pt-2 pb-4">
              When running your operations on AWS, it is important to understand
              the spend. This website will take a comma separated (csv) file as
              input and paints some views to visualize the cost data
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">How to use this website?</h3>
            <p className="text-lg pt-2 pb-4">
              A template is provided for your convenience. Download the
              template. Populate the template csv file with data. Dont change
              the first row (headings). Upload the file and analyze the
              visualization.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">What are the various views</h3>
            <p className="text-lg pt-2 pb-4">
              There are three different views of cost. First view is AWS Service
              view. Second is AWS Account view and the third is Monthly view.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Can I add more views?</h3>
            <p className="text-lg pt-2 pb-4">
              Yes, you can. Please reach the author, Partha Sastry
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">
              Can I view the data I uploaded?
            </h3>
            <p className="text-lg pt-2 pb-4">
              Yes, you can. There is a table that is generated and below the
              visualizations. There is also a search facility, where you can
              view a specific AWS Service or AWS Account.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">
              The file downloaded from webapp is not formatted correctly. What
              should I do?
            </h3>
            <p className="text-lg pt-2 pb-4">
              Please create a new csv file with headings as
              Date,Service,Account,Cost. The date should be in MM/DD/YYYY
              format. Cost should be numbers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
