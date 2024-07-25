using Microsoft.JSInterop;

namespace MauiPoCSynapse
{
  public partial class App : Application
  {
    public App()
    {
      InitializeComponent();

      MainPage = new MainPage();
    }

    [JSInvokable]
    public static string CheckNumber(int number)
    {
      if (number % 2 == 0)
        return $"The Number {number} is Even.";
      else
        return $"The Number {number} is Odd.";
    }

    [JSInvokable]
    public static string GetDeviceInfo()
    {
      string deviceDetails = "Device Name: " + DeviceInfo.Name + " | Orientation: " + DeviceDisplay.MainDisplayInfo.Orientation;
      return deviceDetails;
    }
  }
}
