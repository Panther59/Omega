using Microsoft.AspNetCore.Mvc;
using Omega.Models;

namespace Omega.Controllers
{
    [ApiController]
    public class EncodeController : ControllerBase
    {
        [HttpPost]
        [Route(Routes.Base64DecodeString)]
        public StringContainer Decode(StringContainer input)
        {
            var base64EncodedBytes = System.Convert.FromBase64String(input.Text);
            return new StringContainer { Text = System.Text.Encoding.UTF8.GetString(base64EncodedBytes) };
        }

        [HttpPost]
        [Route(Routes.Base64EncodeString)]
        public StringContainer Encode(StringContainer input)
        {
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(input.Text);
            return new StringContainer { Text = System.Convert.ToBase64String(plainTextBytes) };
        }
    }
}
