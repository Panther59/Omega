using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Omega.Controllers
{
    [ApiController]
    public class EncodeController : ControllerBase
    {
        [HttpPost]
        [Route(Routes.Base64DecodeString)]
        public string Decode(string input)
        {
            var base64EncodedBytes = System.Convert.FromBase64String(input);
            return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
        }

        [HttpPost]
        [Route(Routes.Base64EncodeString)]
        public string Encode([FromBody]string input)
        {
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(input);
            return System.Convert.ToBase64String(plainTextBytes);
        }
    }
}
