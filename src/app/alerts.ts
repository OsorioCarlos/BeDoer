import {ToastrService} from 'ngx-toastr';


export class Alerts {

  constructor(private toastrService: ToastrService) {
  }

  public success(title: string, message: string, time?: number, bar?: boolean): void {
    if (time || bar) {
      this.toastrService.success(message, title, {
        timeOut: time,
        progressBar: bar
      });
    }else{
      this.toastrService.success(message, title );
    }
  }

  public error(title: string, message: string, time: number, bar: boolean): void {
    if (time || bar) {
      this.toastrService.error(message, title, {
        timeOut: time,
        progressBar: bar
      });
    }else{
      this.toastrService.error(message, title );
    }
  }

  public info(title: string, message: string, time: number, bar: boolean): void {
    if (time || bar) {
      this.toastrService.info(message, title, {
        timeOut: time,
        progressBar: bar
      });
    }else{
      this.toastrService.info(message, title );
    }
  }

  public warning(title: string, message: string, time: number, bar: boolean): void {
    if (time || bar) {
      this.toastrService.warning(message, title, {
        timeOut: time,
        progressBar: bar
      });
    }else{
      this.toastrService.warning(message, title );
    }
  }

}
