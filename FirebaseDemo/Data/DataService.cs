using Firebase.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Firebase.Database.Query;

namespace FirebaseDemo.Data
{
    public class DataService
    {
        private FirebaseClient _firebaseClient;

        public DataService()
        {
            this.SetupDb();
        }

        private void SetupDb()
        {
            var auth = "GuLnTnRtQvkfwSlnVWyNSxxu0KHsAkalq7HSo8K2"; // your app secret
            _firebaseClient = new FirebaseClient(
              "https://fir-demo-31852.firebaseio.com",
              new FirebaseOptions
              {
                  AuthTokenAsyncFactory = () => Task.FromResult(auth)
              });
            //var temp = AddNewUser(new User { UserName = "12312", Password = "213123" });
            var temp = AuthenticateUser("12312", "213123");
        }

        public FirebaseObject<User> AddNewUser(User user)
        {
            return _firebaseClient.Child("Users").Child($"{user.UserName}").PostAsync(user).Result;
        }

        public FirebaseObject<User> AuthenticateUser(string userName, string Password)
        {
            return _firebaseClient.Child("Users").OrderByKey().StartAt(userName).LimitToFirst(2).OnceAsync<User>().Result.FirstOrDefault();
        }
    }
}
