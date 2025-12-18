module.exports.getRole = (points) => {
  if (points >= 5000) return "Diamond";
  if (points >= 3000) return "Platinum";
  if (points >= 2000) return "Gold";
  if (points >= 1000) return "Silver";
  if (points >= 500) return "Bronze";
  return "New Member";
};
