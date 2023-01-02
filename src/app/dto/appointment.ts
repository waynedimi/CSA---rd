export class Appointment {
  private _id: number;
  private _patientName: string;
  private _animaltype: string;
  private _ownerId: number;
  private _ownerName: string;
  private _ownerSurname: string;
  private _ownerContactNumber: number;
  private _appointmentDateTime: Date;
  private _appointmentDuration: number;
  private _reasonForAppointment: string;
  private _vetNotes: string;

  constructor(
    id: number,
    patientname: string,
    animaltype: string,
    ownerId: number,
    ownerName: string,
    ownerSurname: string,
    ownerContactNumber: number,
    appointmentDateTime: Date,
    appointmentDuration: number,
    reasonForAppointment: string,
    vetNotes: string
  ) {
    this._id = id;
    this._patientName = patientname;
    this._animaltype = animaltype;
    this._ownerId = ownerId;
    this._ownerName = ownerName;
    this._ownerSurname = ownerSurname;
    this._ownerContactNumber = ownerContactNumber; //continue from here
    this._appointmentDateTime = appointmentDateTime;
    this._appointmentDuration = appointmentDuration;
    this._reasonForAppointment = reasonForAppointment;
    this._vetNotes = vetNotes;
  }
  public get id(): number {
    return this._id;
  }
  public set id(id: number) {
    this._id = id;
  }
  public get patientname(): string {
    return this._patientName;
  }
  public set patientname(patientName: string) {
    this._patientName = patientName;
  }
  public get animaltype(): string {
    return this._animaltype;
  }
  public set animaltype(animaltype: string) {
    this._animaltype = animaltype;
  }
  public get ownerId(): number {
    return this._ownerId;
  }
  public set ownerId(ownerId: number) {
    this._ownerId = ownerId;
  }
  public get ownerName(): string {
    return this._ownerName;
  }
  public set ownerName(ownerName: string) {
    this._ownerName = ownerName;
  }
  public get ownerSurname(): string {
    return this._ownerSurname;
  }
  public set ownerSurname(ownerSurname: string) {
    this._ownerSurname = ownerSurname;
  }
  public get ownerContactNumber(): number {
    return this._ownerContactNumber;
  }
  public set ownerContactNumber(ownerContactNumber: number) {
    this._ownerContactNumber = ownerContactNumber;
  }
  public get appointmentDateTime(): Date {
    return this._appointmentDateTime;
  }
  public set appointmentDateTime(appointmentDateTime: Date) {
    this._appointmentDateTime = appointmentDateTime;
  }
  public get appointmentDuration(): number {
    return this._appointmentDuration;
  }
  public set appointmentDuration(appointmentDuration: number) {
    this._appointmentDuration = appointmentDuration;
  }
  public get reasonForAppointment(): string {
    return this._reasonForAppointment;
  }
  public set reasonForAppointment(reasonForAppointment: string) {
    this._reasonForAppointment = reasonForAppointment;
  }
  public get vetNotes(): string {
    return this._vetNotes;
  }
  public set vetNotes(vetNotes: string) {
    this._vetNotes = vetNotes;
  }
}
