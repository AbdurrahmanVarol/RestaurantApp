string url = "https://www.google.com/"; // Replace with the URL you want to download

using (HttpClient client = new HttpClient())
{
    using (HttpResponseMessage response = await client.GetAsync(url, HttpCompletionOption.ResponseHeadersRead))
    {
        response.EnsureSuccessStatusCode();

        using (Stream contentStream = await response.Content.ReadAsStreamAsync(),
                       memoryStream = new MemoryStream())
        {
            var totalBytes = response.Content.Headers.ContentLength.HasValue ? response.Content.Headers.ContentLength.Value : -1L;
            var totalReadBytes = 0L;
            var buffer = new byte[8192];
            var isMoreToRead = true;

            do
            {
                var read = await contentStream.ReadAsync(buffer, 0, buffer.Length);
                if (read == 0)
                {
                    isMoreToRead = false;
                }
                else
                {
                    await memoryStream.WriteAsync(buffer, 0, read);

                    totalReadBytes += read;
                    if (totalBytes != -1)
                    {
                        var percentage = ((float)totalReadBytes / totalBytes) * 100;
                        Console.WriteLine($"Downloaded {totalReadBytes} bytes of {totalBytes} bytes. {percentage:F2}% complete.");
                    }
                }
            } while (isMoreToRead);
        }
    }
}