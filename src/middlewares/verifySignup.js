import User from'../model/user';
import{ ROLES }from'../model/role';
import Domain from'../model/domains';
const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try{
    const user = await User.findOne({ username: req.body.username }).exec();
    if(user){ return res.status(409).json({ message: 'The user already exists' }); }
    const email = await User.findOne({ email: req.body.email }).exec();
    if(email){ return res.status(409).json({ message: 'The email already exists' }); }
    next();
  }catch(error){
    res.status(500).json({ message: error });
  }
};

const checkRolesExisted = (req, res, next) => {
  if(req.body.roles){
    for(let i = 0; i < req.body.roles.length; i++){
      if(!ROLES.includes(req.body.roles[i])){
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} does not exist`
        });
      }
    }
  }

  next();
};

const CheckDomainExistOrNot = async(req,res,next) => {
try {
  
  const IsAvailableDomain = await Domain.findOne({ siteUrl:req.body.siteUrl }).exec();
  console.log(`${IsAvailableDomain}`)
  if(IsAvailableDomain){ return res.status(409).json({ message: 'Domain is associated with some other organisation \n\rPlease chose new Domain Name' }); }
  next()
} catch (error) {
   res.status(500).json({ message: error.message });
} 
};

export{ checkDuplicateUsernameOrEmail, checkRolesExisted,CheckDomainExistOrNot };
