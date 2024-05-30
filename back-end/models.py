from typing import List, Optional
from pydantic import BaseModel

# Employee Information Schema
class EmployeeNameModel(BaseModel):
    FirstName: str
    MiddleInitial: Optional[str] = None  # Optional field
    LastName: str

class EmployeeAddressModel(BaseModel):
    Street: str
    City: str
    State: str
    ZipCode: str

class EmployeeInformationModel(BaseModel):
    EmployeeName: EmployeeNameModel
    SocialSecurityNumber: str
    Address: EmployeeAddressModel

# Employer Information Schema
class EmployerAddressModel(BaseModel):
    Street: str
    City: str
    State: str
    ZipCode: str

class EmployerInformationModel(BaseModel):
    EmployerName: str
    EmployerIdentificationNumber: str
    EmployerAddress: EmployerAddressModel

# Wages and Taxes Schema
class WagesAndTaxesModel(BaseModel):
    WagesTipsOtherCompensation: float
    FederalIncomeTaxWithheld: float
    SocialSecurityWages: float
    SocialSecurityTaxWithheld: float
    MedicareWagesAndTips: float
    MedicareTaxWithheld: float
    SocialSecurityTips: Optional[float] = None  # Optional field
    AllocatedTips: Optional[float] = None  # Optional field

# State and Local Taxes Schema
class StateInformationModel(BaseModel):
    State: str
    EmployerStateIDNumber: str
    StateWagesTipsEtc: float
    StateIncomeTax: float

class LocalInformationModel(BaseModel):
    LocalityName: str
    LocalWagesTipsEtc: float
    LocalIncomeTax: float
    LocalityCode: Optional[str] = None

class StateAndLocalTaxesModel(BaseModel):
    StateInformation: Optional[List[StateInformationModel]] = None  # Optional field
    LocalInformation: Optional[List[LocalInformationModel]] = None  # Optional field

# Other Information Schema
class Box12CodeModel(BaseModel):
    Code: str
    Amount: float

class Box13CheckboxesModel(BaseModel):
    StatutoryEmployee: bool
    RetirementPlan: bool
    ThirdPartySickPay: bool

class Box14OtherModel(BaseModel):
    Description: str
    Amount: float

class OtherInformationModel(BaseModel):
    Box12Codes: Optional[List[Box12CodeModel]] = None  # Optional field
    Box13Checkboxes: Optional[Box13CheckboxesModel] = None  # Optional field
    Box14Other: Optional[List[Box14OtherModel]] = None  # Optional field

# Final W2 Form Model
class W2FormModel(BaseModel):
    EmployeeInformation: EmployeeInformationModel
    EmployerInformation: EmployerInformationModel
    WagesAndTaxes: WagesAndTaxesModel
    StateAndLocalTaxes: StateAndLocalTaxesModel
    OtherInformation: Optional[OtherInformationModel] = None  # Optional field
