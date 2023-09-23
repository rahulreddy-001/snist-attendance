const log = async (data, c, id, time) => {
  time = ((new Date() - time) / 600).toFixed(2);
  console.log(
    data.success
      ? `Y${c} - ${id} - ${time} - ${data.data.year}`
      : `N${c} - ${id} - ${time} - ${data.data.message}`
  );
};

module.exports = log;
