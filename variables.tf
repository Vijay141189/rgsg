variable "resource_group_name" {
  type        = string
  description = "The name of the resource group in which to create the resources."
  default     = "rg-workspace-resources"
}

variable "location" {
  type        = string
  description = "The Azure region where the resource group and storage account should be created."
  default     = "East US"
}

variable "storage_account_prefix" {
  type        = string
  description = "A prefix for the storage account name. Must be lowercase letters and numbers only."
  default     = "stwork"
}

variable "storage_account_tier" {
  type        = string
  description = "Defines the Tier to use for this storage account."
  default     = "Standard"
}

variable "storage_account_replication_type" {
  type        = string
  description = "Defines the type of replication to use for this storage account."
  default     = "LRS"
}
