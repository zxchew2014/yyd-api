import express from "express";
import admin from "../../firebase";

const router = express.Router();

router.post("/updateDO", (req, res) => {
  const { data } = req.body;

  console.log(data.accessToken);
  console.log(data.dutyOfficerName);
  console.log(data.uid);

  admin
    .auth()
    .verifyIdToken(data.accessToken)
    .then(function(decodedToken) {
      var uid = decodedToken.uid;
      admin
        .auth()
        .updateUser(uid, {
          displayName: data.dutyOfficerName
        })
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log("Successfully updated user", userRecord.toJSON());
        })
        .catch(err =>
          res.status(400).json({ errors: parseErrors(err.errors) })
        );

      //Retrieve currentUser login detail
    });

  //
  //         return res.redirect(redirectURL);
  //
  //         c;
  //         // See the UserRecord reference doc for the contents of userRecord.
  //         //console.log("Successfully fetched user data:", userRecord.toJSON());
  //       })
  //       .catch(function(error) {
  //         console.log("Error fetching user data:", error);
  //       });
  //   })
  //   .catch(function(error) {
  //     // Handle error
  //     console.log(error);
  //   });
});

export default router;
