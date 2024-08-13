const getStoredJobApplication = () => {
  const storedJobApplicaton = localStorage.getItem("job-applications");
  if (storedJobApplicaton) {
    return JSON.parse(storedJobApplicaton);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplicatons = getStoredJobApplication();
  const exists = storedJobApplicatons.find((jobId) => jobId === id);
  if (!exists) {
    storedJobApplicatons.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplicatons)
    );
  }
};

export { getStoredJobApplication, saveJobApplication };
