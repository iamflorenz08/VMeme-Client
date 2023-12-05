'use server'
export const checkSchedule = (prevState: any, formData: FormData) => {
    try {
        const vehicleType = formData.get('vehicleType')
        const plateNumber = String(formData.get('plateNumber'))
        const set = formData.get('set')
        const tpl = formData.get('tpl')

        if (!vehicleType || !plateNumber || !set || !tpl) throw new Error('Fill out all the input fields.')

        const plateEndingDigit: any = plateNumber.charAt(plateNumber.length - 1)
        const plateSecondToLastDigit: number = Number(plateNumber.charAt(plateNumber.length - 2))

        const schedule = {
            month: '',
            week: '',
            year: new Date().getFullYear()
        }

        const months = ['October', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',]
        schedule.month = months[plateEndingDigit] ? months[plateEndingDigit] : 'November - December (with penalty)'

        
        if (9 === plateSecondToLastDigit || 0 === plateSecondToLastDigit) {
            schedule.week = '4th week'
        }
        else if (7 <= plateSecondToLastDigit) {
            schedule.week = '3rd week'
        }
        else if (4 <= plateSecondToLastDigit) {
            schedule.week = '2nd week'
        }
        else if (1 <= plateSecondToLastDigit) {
            schedule.week = '1st week'
        }

        return {
            success: true,
            message: `Your motor vehicle with Plate No. ${plateNumber} is QUALIFIED for RENEWAL on 
            ${schedule.month.toString().toUpperCase() + ' ' + schedule.year.toString().toUpperCase()} 
            until the ${schedule.week} of ${schedule.month.toString().toUpperCase() + ' ' + schedule.year.toString().toUpperCase()} only`
        }
    } catch (e: any) {
        return {
            success: false,
            message: e.message
        }
    }

}