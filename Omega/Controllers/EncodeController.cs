using System.Web;
using Microsoft.AspNetCore.Mvc;
using Omega.Models;

namespace Omega.Controllers
{
    [ApiController]
    public class EncodeController : ControllerBase
    {
        [HttpPost]
        [Route(Routes.Base64DecodeString)]
        public StringContainer Base64Decode(StringContainer input)
        {
            var base64EncodedBytes = System.Convert.FromBase64String(input.Text);
            return new StringContainer { Text = System.Text.Encoding.UTF8.GetString(base64EncodedBytes) };
        }

        [HttpPost]
        [Route(Routes.Base64EncodeString)]
        public StringContainer Base64Encode(StringContainer input)
        {
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(input.Text);
            return new StringContainer { Text = System.Convert.ToBase64String(plainTextBytes) };
        }

        [HttpPost]
        [Route(Routes.UrlDecodeString)]
        public StringContainer UrlDecode(StringContainer input)
        {
            var output = HttpUtility.UrlDecode(input.Text);
            return new StringContainer { Text = output };
        }

        [HttpPost]
        [Route(Routes.UrlEncodeString)]
        public StringContainer UrlEncode(StringContainer input)
        {
            var output = HttpUtility.UrlEncode(input.Text);
            return new StringContainer { Text = output };
        }

        [HttpPost]
        [Route(Routes.HtmlDecodeString)]
        public StringContainer HtmlDecode(StringContainer input)
        {
            var output = HttpUtility.HtmlDecode(input.Text);
            return new StringContainer { Text = output };
        }

        [HttpPost]
        [Route(Routes.HtmlEncodeString)]
        public StringContainer HtmlEncode(StringContainer input)
        {
            var output = HttpUtility.HtmlEncode(input.Text);
            return new StringContainer { Text = output };
        }
    }
}
